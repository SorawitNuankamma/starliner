ลูป (Loop) ใช้สำหรับทำงานซ้ำ ๆ อย่างมีประสิทธิภาพ

### For Loop
เหมาะสำหรับจำนวนรอบที่แน่นอน
```python
for i in range(3):
    print(i)
```

สามารถใช้กับลิสต์หรือดิกชันนารี
```python
items = ["a","b"]
for item in items:
    print(item)
```

/​exercise-quiz
- name="for_range_quiz"
- question="ผลลัพธ์ของ range(3) คืออะไร"
- choices="0,1,2, 1,2,3"
- correct_choice="1"

### While Loop
ทำงานจนกว่าเงื่อนไขจะเป็นเท็จ
```python
count = 0
while count < 3:
    print(count)
    count += 1
```

### แบบฝึกหัด
เขียนโปรแกรมรับคะแนนหลายตัวและคำนวณค่าเฉลี่ยโดยใช้ลูป
