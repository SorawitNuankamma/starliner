คำสั่งเงื่อนไข (Conditional Statement) ใช้ควบคุมการทำงานของโปรแกรมตามเงื่อนไขที่กำหนด

### 1. If และ Else
```python
score = 70
if score >= 50:
    print("ผ่าน")
else:
    print("ไม่ผ่าน")
```

/​exercise-single-choices
- name="if_else_quiz"
- question="เงื่อนไขใดทำให้คำสั่ง else ทำงาน"
- choices="เมื่อเงื่อนไขใน if เป็นจริง, เมื่อเงื่อนไขใน if เป็นเท็จ"
- correct_choice="2"

### 2. Elif
ใช้สำหรับตรวจหลายเงื่อนไข
```python
n = 0
if n > 0:
    print("บวก")
elif n == 0:
    print("ศูนย์")
else:
    print("ลบ")
```

### 3. Match Case (Python 3.10 ขึ้นไป)
```python
status = "ok"
match status:
    case "ok":
        print("ทำงานต่อ")
    case "error":
        print("หยุด")
```

/​exercise-single-choices
- name="match_quiz"
- question="คำสั่ง match ใช้แทนโครงสร้างใดได้"
- choices="switch-case, for-loop"
- correct_choice="1"

### แบบฝึกหัด
เขียนโปรแกรมให้รับคะแนนและแสดงเกรด A,B,C,D หรือ F ตามช่วงคะแนน
