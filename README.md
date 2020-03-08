# COPY-NGE

##### โปรเจคนี้เป็นโปรเจค React โปรดติดตั้ง Node js และลง React ให้เรียบร้อย

##### วิธีการรัน

1. โคลนโปรเจ็คไปก่อน
2. ใช้ cmd หรือ Terminal เข้าไปข้างในโฟลเดอร์โปรเจ็ค
3. พิมพ์คำสั่ง npm install กด Enter
4. ไปที่โฟลเดอร์ src จะมีไฟล์ชื่อ prop.json ใส่ข้อมูลให้เรียบร้อย (วิธีการอยู่หัวข้อถัดไป)
5. รันคำสั่ง npm start เพื่อที่จะเปิดเว็บแอพขึ้นมา

##### ข้างใน prop.json จะมีสองตัวคือ

- Token ( ล็อคอินเข้าเว็บ OLIV แล้วเข้าไปเอา Token จาก Session Stroage มาใส่ได้เลย ) 
```
** หากใครไปไม่เป็น ให้เข้าเว็บ OLIV ล็อคอินให้เรียบร้อย กด F12 แล้วไปหน้า Console แล้วก็อปคำสั่งข้างล่างนี้ไปรัน

console.log(window.sessionStorage.token) //Khor-Token-Nhoy-Kaaaaaaaaaa-saaa-tuuu

แต่ถ้าท่านกด Remember me ตอน Log in ต้องใช้อันนี้แทน

console.log(window.localStorage.token)

แล้วพระท่านจะเสก Token มาให้ ให้นำไปใส่ใน prop.json

ตัวอย่าง

{
  "Token" : "asd354875654asd"
  ...
}

```
- SubjectID ( เป็นที่ใส่เลข ID ของวิชาที่ท่านต้องการจะดู )
```
หากต้องการเปลี่ยนวิชา ให้ใส่ id วิชาที่ SubjectID โดยรูปแบบเป็นแบบนี้

{
 ...
 "SubjectID": "ใส่ตรงนี้"
}


เช่น วิชา INT401 มีรหัสเป็น 189 ก็ต้องใส่แบบนี้..

{
 ...
 "SubjectID": "189"
}

และต่อจากนี้คือเลข id ของแต่ละวิชา (ให้ใช้เลขหน้า = นะครับ)

"156 = INT101"
"153 = INT102"
"154 = INT103"
"157 = INT105-G1"
"496 = INT105-G2"
"158 = INT106"
"159 = INT107"
"629 = INT114-G1"
"630 = INT114-G2"
"160 = INT201"
"161 = INT202"
"162 = INT203"
"166 = INT204"
"164 = INT205"
"163 = INT206"
"515 = INT207"
"167 = INT301"
"168 = INT302"
"169 = INT303"
"170 = INT304"
"171 = INT305"
"174 = INT306"
"175 = INT307"
"708 = INT320"
"172 = INT351-G1-2"
"176 = INT352"
"649 = INT353/INT450"
"542 = INT370"
"193 = INT373"
"512 = INT374"
"538 = INT380"
"181 = INT381"
"180 = INT382"
"536 = INT383"
"535 = INT397"
"189 = INT401"
"188 = INT402-G1"
"648 = INT402-G2"
"183 = INT450"
"186 = INT451-G1-2"
"177 = INT467"
"178 = INT470"
"468 = INT473"
"179 = INT474"
"615 = INT491"
"650 = INT491"
"718 = INT491/ CSC493"
"619 = INT492"
"624 = INT492"
"665 = INT492"
"717 = INT493"
"553 = INT494"
"623 = INT494"
"627 = INT494"
"529 = INT494-1"
"519 = INT494-2"
"554 = INT495"
"182 = INT495"
"190 = INT496"
"620 = INT497"
"626 = INT497"
"548 = INT497-1"

```
** หากต้องการวิชาเพิ่มเติม เปิด Issue ไว้ครับ

** หาอ่านแล้วไม่ค่อยเข้าใจก็เปิด Issue ได้นะครับ เดี๋ยวช่วยๆกันสอน

