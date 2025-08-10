ฟังก์ชัน (Function) คือชุดคำสั่งที่รวมกันเพื่อทำงานเฉพาะอย่าง และสามารถเรียกใช้งานซ้ำได้

```python
def add(a,b):
    return a + b

result = add(2,3)
```

### พารามิเตอร์และการส่งค่า
พารามิเตอร์คือค่าที่ส่งเข้าไปในฟังก์ชัน ตัวแปรที่ส่งเข้าไปมีทั้งแบบ pass by value และ pass by reference

```python
def append_item(lst):
    lst.append(5)

nums = [1,2]
append_item(nums)
# nums กลายเป็น [1,2,5]
```

/​exercise-single-choices
- name="param_quiz"
- question="ค่าชนิดใดเมื่อส่งเข้า function แล้วค่าต้นฉบับเปลี่ยน"
- choices="int, list"
- correct_choice="2"
- choices_reason="int เป็น pass by value, list เป็น reference"

### การคืนค่า (Return)
ฟังก์ชันอาจไม่คืนค่า หรือคืนค่าชนิดต่างๆ ได้

### แบบฝึกหัด
1. เขียนฟังก์ชันแยกส่วนการคำนวณพื้นที่สามเหลี่ยม
2. เขียนฟังก์ชันเพิ่มสมาชิกให้ list และคืนค่าจำนวนสมาชิกทั้งหมด
