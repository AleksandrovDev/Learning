interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function validateBST(root: TreeNode) {
  function validateNode(
    node: TreeNode | null,
    min: number,
    max: number,
  ): boolean {
    if (!node) {
      return true;
    }

    if (node.val <= min || node.val >= max) {
      return false;
    }

    const isLeftSubtreeValid = validateNode(node.left, min, node.val);
    const isRightSubtreeValid = validateNode(node.right, node.val, max);

    return isLeftSubtreeValid && isRightSubtreeValid;
  }

  return validateNode(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
}
