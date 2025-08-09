ในบทนี้จะอธิบายการทำงานของ Computer ในรูปแบบจำลองที่จำเป็นต่อเรื่อง Programming

Computer ประกอบขึ้นมาจากวงจรอิเล็กทรอนิกค์ที่มีคุณสมบัติพื้นฐาน 2 อย่าง
1. สามารถคำนวนเลขได้ โดยใช้หน่วยประมวลผลกลาง Central Processing Unit หรือ CPU
2. สามารถเก็บข้อมูลได้ โดยใช้อุปกรณ์เก็บข้อมูลเช่น RAM, SSD, Hard Disk

ในโลกความเป็นจริง กระบวนการเก็บข้อมูลและประมวลผลจะซับซ้อนมากกว่านี้
แต่เพื่อให้เข้าใจได้ง่าย ให้คิดแค่ว่า Computer ตอนนี้มีแค่ Memory และ CPU

### 1. หน่วยความจำ Memory

Memory หรือหน่วยความจำ ในตัว Memory ตัวหนึ่ง เช่น RAM มีหน่วยความจำอยู่หลายๆช่องให้ Computer สามารถเก็บข้อมูลได้หลายๆข้อมูล โดยแบบจำลอง Memory นี้จะมีองค์ประกอบ 2 ส่วน
1. ตำแหน่งของช่องความจำ ( location )
2. ค่าที่เก็บ ( value )

###### ตัวอย่างระบบ Memory จำลองที่ประกอบไปด้วยตำแหน่งและค่าที่เก็บ

| location | value |
| -------- | ----- |
| x0       | hello |
| x1       |       |
| x2       |       |
| x3       |       |

### 2. หน่วยประมวลผล CPU

Central Processing Unit หรือ CPU เป็นส่วนที่ทำหน้าที่ประมวลผลใน Computer เพื่อทำสิ่งต่างๆ เช่น อ่านข้อมูล บันทึกข้อมูล หรือบวกลบเลข เป็นต้น

โดยที่ CPU จะทำตามคำสั่งที่เรียกว่า Instruction Set 

Instruction Set เป็นคำสั่งระบบพื้นฐานที่สุดของ Computer ซึ่งในอดีตนั้น หากผู้ใช้ Computer ต้องการให้ Computer ทำอะไร เขาจะต้องทำการเขียน Instruction Set และนำเข้าสู่ Computer ด้วยตัวเอง

หากผู้ใช้สั่งให้ Computer ประมวลผลด้วย Instruction Set นี้

```
SET x1 17
SET x2 15
ADD x1 x2 x3
```

จะทำให้ Memory เป็นแบบนี้

| location | value |
| -------- | ----- |
| x0       | hello |
| x1       | 17    |
| x2       | 15    |
| x3       | 32    |

/exercise-quiz
- name="exercise_2"
- question="ให้ทายว่าใน Instruction Set นี้ คอมพิวเตอร์ทำอะไร"
- choices="
  เพิ่มจำนวน x1 เป็น 17 ตัว,
  เก็บเลข 17 และ 15 และทำการลบเลข,
  เก็บเลข 17 และ 15 และทำการบวกเลขสองตัวนั้นและเก็บผลลัพท์
  "
- correct_choice="3"
- choices_reason="
  ไม่ใช่,
  เกือบถูกต้องแล้ว,
  ถูกต้องแล้ว 
  คำสั่งแรกและคำสั่งที่สอง หมายถึงการกำหนดค่า memory ที่ตำแหน่งนั้นๆ เช่น SET x1 17 คือการกำหนดค่า MEMORY ที่ x1 ด้วยค่า 17 และคำสั่งที่ 3 ADD x1 x2 x3 หมายถึงการบวกเลขระหว่างตำแหน่ง x1 และตำแหน่งที่ x1 และนำผลลัพท์ไปเก็บที่ตำแหน่ง x3
  "

Instruction Set นั้นถูกออกแบบมาโดยเน้นให้ Computer สามารถอ่านได้ง่ายและตรงไปตรงมาที่สุดเพื่อทำให้
กระบวนการของการทำงาน Computer เป็นไปอย่างสม่ำเสมอ โดย CPU จะทำตาม Instruction Set ตามบรรทัดบนลงบรรทัดล่าง 

ต่อมา ระบบกระบวนการทำงานของ Computer และหน่วยความจำก็ถูกพัฒนาซับซ้อนขึ้นเรื่อยๆ จนทำให้ต้องมีเครื่องมือในการเขียน Instruction Set ที่ผู้พัฒนาสามารถอ่านได้ง่ายขึ้น ซึ่งก็คือการเขียนโปรแกรมนั้นเอง

### Exercise

##### instruction Set 1

```
SET x1 true
SET x2 false
AND x1 x2 x3
SET x4 30000
```

##### instruction Set 2

```
SET x1 15000
SET x2 10000
SUB x1 x2 x3
```

##### Python Code 1

```
salary = 15000
rent = 10000
money_left = 5000
```

##### Python Code 2

```
is_have_car = true
is_have_house = false
is_rich = is_have_car and is_have_house
salary = 30000
```

/exercise-quiz
- name="exercise_3"
- question="ให้เดาว่า Instruction Set  ข้างบน มีผลลัพท์เหมือนการเขียนโปรแกรมบรรทัดใด"
- choices="
  Instruction Set 1 เหมือน Python Code 1 และ Instruction Set 2 เหมือน Python Code 2,
  Instruction Set 1 เหมือน Python Code 2 และ Instruction Set 2 เหมือน Python Code 1
  "
- correct_choice="2"
- choices_reason="
  ไม่ใช่,
  ถูกต้อง ถ้าดูจากกระบวนการทำงานที่เหมือนกัน
  "

โดยความเกี่ยวข้อง และกระบวนการแปลงจากภาษา Programming ไปยัง Instruction Set จะอธิบายในบทหน้า