type BZero = false;
type BOne = true;

// type StrangeOperation = Divide<
//   Add<Multiply<Six, Add<One, Two>>, Six>,
//   Subtract<Six, Two>
// >;
type Bit = 0 | 1;

type Byte = [Bit, Bit, Bit, Bit, Bit, Bit];

type Decimal = 
  | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19
  | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29
  | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39
  | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49
  | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59
  | 60 | 61 | 62 | 63

type ToBinary<T extends Decimal> = [
  T extends (0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31) ? 0 : 1,
  T extends (0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47) ? 0 : 1,
  T extends (0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55) ? 0 : 1,
  T extends (0 | 1 | 2 | 3 | 8 | 9 | 10 | 11 | 16 | 17 | 18 | 19 | 24 | 25 | 26 | 27 | 32 | 33 | 34 | 35 | 40 | 41 | 42 | 43 | 48 | 49 | 50 | 51| 56 | 57 | 58 | 59) ? 0 : 1,
  T extends (0 | 1 | 4 | 5 | 8 | 9 | 12 | 13 | 16 | 17 | 20 | 21 | 24 | 25 | 28 | 29 | 32 | 33 | 36 | 37 | 40 | 41 | 44 | 45 | 48 | 49 | 52 | 53 | 56 | 57 | 60 | 61) ? 0 : 1,
  T extends (0 | 2 | 4 | 6 |  8 | 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 | 26 | 28 | 30 | 32 | 34 | 36 | 38 | 40 | 42 | 44 | 46 | 48 | 50 | 52 | 54 | 56 | 58 | 60 | 62) ? 0 : 1
]

type ToDecimal<T extends (Byte | 'overflow')> = (
  T extends 'overflow' ? 'overflow' :
  T extends ToBinary<0> ? 0 :
  T extends ToBinary<1> ? 1 :
  T extends ToBinary<2> ? 2 :
  T extends ToBinary<3> ? 3 :
  T extends ToBinary<4> ? 4 :
  T extends ToBinary<5> ? 5 :
  T extends ToBinary<6> ? 6 :
  T extends ToBinary<7> ? 7 :
  T extends ToBinary<8> ? 8 :
  T extends ToBinary<9> ? 9 :
  T extends ToBinary<10> ? 10 :
  T extends ToBinary<11> ? 11 :
  T extends ToBinary<12> ? 12 :
  T extends ToBinary<13> ? 13 :
  T extends ToBinary<14> ? 14 :
  T extends ToBinary<15> ? 15 :
  T extends ToBinary<16> ? 16 :
  T extends ToBinary<17> ? 17 :
  T extends ToBinary<18> ? 18 :
  T extends ToBinary<19> ? 19 :
  T extends ToBinary<20> ? 20 :
  T extends ToBinary<21> ? 21 :
  T extends ToBinary<22> ? 22 :
  T extends ToBinary<23> ? 23 :
  T extends ToBinary<24> ? 24 :
  T extends ToBinary<25> ? 25 :
  T extends ToBinary<26> ? 26 :
  T extends ToBinary<27> ? 27 :
  T extends ToBinary<28> ? 28 :
  T extends ToBinary<29> ? 29 :
  T extends ToBinary<30> ? 30 :
  T extends ToBinary<31> ? 31 :
  T extends ToBinary<32> ? 32 :
  T extends ToBinary<33> ? 33 :
  T extends ToBinary<34> ? 34 :
  T extends ToBinary<35> ? 35 :
  T extends ToBinary<36> ? 36 :
  T extends ToBinary<37> ? 37 :
  T extends ToBinary<38> ? 38 :
  T extends ToBinary<39> ? 39 :
  T extends ToBinary<40> ? 40 :
  T extends ToBinary<41> ? 41 :
  T extends ToBinary<42> ? 42 :
  T extends ToBinary<43> ? 43 :
  T extends ToBinary<44> ? 44 :
  T extends ToBinary<45> ? 45 :
  T extends ToBinary<46> ? 46 :
  T extends ToBinary<47> ? 47 :
  T extends ToBinary<48> ? 48 :
  T extends ToBinary<49> ? 49 :
  T extends ToBinary<50> ? 50 :
  T extends ToBinary<51> ? 51 :
  T extends ToBinary<52> ? 52 :
  T extends ToBinary<53> ? 53 :
  T extends ToBinary<54> ? 54 :
  T extends ToBinary<55> ? 55 :
  T extends ToBinary<56> ? 56 :
  T extends ToBinary<57> ? 57 :
  T extends ToBinary<58> ? 58 :
  T extends ToBinary<59> ? 59 :
  T extends ToBinary<60> ? 60 :
  T extends ToBinary<61> ? 61 :
  T extends ToBinary<62> ? 62 :
  T extends ToBinary<63> ? 63 :
  never
)

type And<A extends Bit, B extends Bit> = B extends 1 ? A extends 1 ? 1 : 0 : 0;
type Or<A extends Bit, B extends Bit> = B extends 0 ? A extends 0 ? 0 : 1 : 1;
type Xor<A extends Bit, B extends Bit> = (A extends 0 ? (B extends 0 ? 0 : 1) : (B extends 0 ? 1 : 0));
type Nxor<A extends Bit, B extends Bit> = (A extends 0 ? (B extends 0 ? 1 : 0) : (B extends 0 ? 0 : 1));

type Sum<A extends Bit, B extends Bit, C extends Bit> = Nxor<Nxor<A, B>, C>;
type Carry<A extends Bit, B extends Bit, C extends Bit> = Or<And<C, Xor<A, B>>, And<A, B>>;

type AddBinary<A extends Byte, B extends Byte> = (
  Carry<A[0], B[0], Carry<A[1], B[1], Carry<A[2], B[2], Carry<A[3], B[3], Carry<A[4], B[4], Carry<A[5], B[5], 0>>>>>> extends 1 ? 'overflow' : (
  [
    Sum<A[0], B[0], Carry<A[1], B[1], Carry<A[2], B[2], Carry<A[3], B[3], Carry<A[4], B[4], Carry<A[5], B[5], 0>>>>>>,
    Sum<A[1], B[1], Carry<A[2], B[2], Carry<A[3], B[3], Carry<A[4], B[4], Carry<A[5], B[5], 0>>>>>,
    Sum<A[2], B[2], Carry<A[3], B[3], Carry<A[4], B[4], Carry<A[5], B[5], 0>>>>,
    Sum<A[3], B[3], Carry<A[4], B[4], Carry<A[5], B[5], 0>>>,
    Sum<A[4], B[4], Carry<A[5], B[5], 0>>,
    Sum<A[5], B[5], 0>
  ])
)

type Add<A extends Decimal, B extends Decimal> = ToDecimal<AddBinary<ToBinary<A>, ToBinary<B>>>;

// this has type 36
type Result = Add<5, 31>