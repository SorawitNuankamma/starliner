ตัวแปรเชิงประกอบ (Composite Variable) คือโครงสร้างที่สามารถเก็บข้อมูลหลายค่าในตัวแปรเดียว

### 1. List
List ใช้เก็บข้อมูลหลายค่าเป็นลำดับ สามารถเพิ่มหรือลบข้อมูลได้

```python
numbers = [1,2,3]
numbers.append(4)
first = numbers[0]
```

- ใช้ `append()` เพื่อเพิ่มค่า
- ใช้อินเด็กซ์ `[index]` เพื่อเข้าถึงค่า
- ใช้ slicing เช่น `numbers[:-1]`

/​exercise-single-choices
- name="list_quiz"
- question="คำสั่งใดใช้ลบค่าตัวสุดท้ายของ list"
- choices="pop(),push(),remove()"
- correct_choice="1"

### 2. String
String คือชุดของตัวอักษร สามารถต่อและจัดรูปแบบได้

```python
first = "Star"
last = "Liner"
name = first + last
print(f"ชื่อเต็ม {name}")
```

/​exercise-single-choices
- name="string_format_quiz"
- question="หากต้องการใส่ค่าตัวแปรลงในข้อความควรใช้รูปแบบใด"
- choices="'{}', f-string, concat ด้วย +"
- correct_choice="2"

### 3. Dictionary
Dictionary เก็บคู่ของชื่อกับค่า ใช้งานคล้ายตารางค้นหา

```python
country = {"thai":"Bangkok","japan":"Tokyo"}
print(country["thai"])
```

/​exercise-single-choices
- name="dict_quiz"
- question="หากต้องการเพิ่ม key ใหม่ใน dictionary ต้องใช้รูปแบบใด"
- choices="dict.add(key,value), dict[key]=value, append()"
- correct_choice="2"

### 4. Object
Object คือโครงสร้างที่มีทั้งข้อมูลและพฤติกรรม (method)

```python
class Dog:
    def __init__(self,name):
        self.name = name
    def bark(self):
        print("woof")

pet = Dog("Milo")
pet.bark()
```

/​exercise-single-choices
- name="object_method_quiz"
- question="คำสั่งใดถูกต้องในการเรียกใช้ method ของ object"
- choices="Dog.bark(), pet.bark(), bark(pet)"
- correct_choice="2"

### แบบฝึกหัด
1. สร้าง list ของคะแนนนักเรียนและหาค่าเฉลี่ย
2. สร้าง dictionary สำหรับนับจำนวนตัวอักษรในข้อความ
3. สร้าง class อย่างง่ายที่มี property และ method ของตนเอง
