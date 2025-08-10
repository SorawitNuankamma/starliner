คลาสและออบเจกต์ (Class & Object) เป็นแนวคิดสำคัญของการเขียนโปรแกรมเชิงวัตถุ

### การประกาศคลาส
```python
class Person:
    def __init__(self,name):
        self.name = name
    def say(self):
        print(f"สวัสดี {self.name}")
```

### การสร้างออบเจกต์และเรียกใช้เมธอด
```python
p = Person("Bee")
p.say()
```

/​exercise-single-choices
- name="class_quiz"
- question="เมธอดพิเศษที่ใช้สำหรับสร้างออบเจกต์คืออะไร"
- choices="__init__, __main__"
- correct_choice="1"

### แบบฝึกหัด
สร้างคลาส `Car` ที่มีคุณสมบัติ `brand` และเมธอด `drive()` ที่พิมพ์ข้อความระบุยี่ห้อรถ
