from sqlalchemy import create_engine

from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Date
from datetime import datetime, timedelta, date

from sqlalchemy.orm import sessionmaker

# Write your code here
engine = create_engine('sqlite:///todo.db?check_same_thread=False')  # creating database file
Base = declarative_base()  # create model class that describe the table


class Table(Base):
    __tablename__ = 'task'  # table name in SQL
    id = Column(Integer, primary_key=True)  # integer column of the table
    task = Column(String, default='default_value')  # string column
    deadline = Column(Date, default=datetime.today())

    def __repr__(self):
        return self.task  # each row is an object of a class


Base.metadata.create_all(engine)  # create a table in database by generating SQL queries

# To access the database we need to create a session
Session = sessionmaker(bind=engine)
session = Session()


def show_today_tasks(today=None):
    week = {0: 'Monday',
            1: 'Tuesday',
            2: 'Wednesday',
            3: 'Thursday',
            4: 'Friday',
            5: 'Saturday',
            6: 'Sunday'}
    if today is None:
        today = datetime.today()
        name_of_day = "Today"
    else:
        name_of_day = week[today.weekday()]
    rows = session.query(Table).filter(Table.deadline == today.date()).all()
    count = 1
    if not rows:
        print()
        print(f"{name_of_day} {today.day} {today.strftime('%b')}:")
        print("Nothing to do!")
    else:
        print()
        print(f"{name_of_day} {today.day} {today.strftime('%b')}:")
        for s in rows:
            print(f"{count}. {s.task}")
            count += 1


def show_week_task():
    today = datetime.today()
    for i in range(7):
        show_today_tasks(today)
        today += timedelta(days=1)


def show_all_tasks(rows):
    count = 1
    for s in rows:
        print(f"{count}. {s.task}. {s.deadline.day} {s.deadline.strftime('%b')}")
        count += 1
    print()


def add_task():
    print("Enter task")
    task_to_add = input()
    print("Enter the deadline:")
    deadline = input()
    deadline = datetime.strptime(deadline, '%Y-%m-%d')
    new_row = Table(task=task_to_add,
                    deadline=deadline)
    session.add(new_row)
    session.commit()
    print("The task has been added!")


def delete_task():
    rows = session.query(Table).order_by(Table.deadline).all()
    print("Choose the number of the task you want to delete:")
    show_all_tasks(rows)
    number_to_delete = int(input())
    session.delete(rows[number_to_delete-1])
    session.commit()
    print("The task has been deleted!")
    pass


def main_menu_show():
    print("1) Today's tasks")
    print("2) Week's tasks")
    print("3) All tasks")
    print("4) Missed tasks")
    print("5) Add task")
    print("6) Delete task")
    print("0) Exit")


def main_menu_manipulate(enter):
    if enter == 1:
        show_today_tasks()
    elif enter == 2:
        show_week_task()
    elif enter == 3:
        rows = session.query(Table).order_by(Table.deadline).all()
        show_all_tasks(rows)
    elif enter == 4:
        rows = session.query(Table).filter(Table.deadline < datetime.today().date()).order_by(Table.deadline).all()
        show_all_tasks(rows)
    elif enter == 5:
        add_task()
    elif enter == 6:
        delete_task()
    elif enter == 0:
        global is_working
        is_working = False
        print("Bye!")
    else:
        pass


# main start

is_working = True

while is_working:
    main_menu_show()
    enter = int(input())
    main_menu_manipulate(enter)
# main end
