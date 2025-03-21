![enter image description here](https://github.com/user-attachments/assets/56462ce1-59a8-41fd-bea8-5f08920b6798)
<p align="center">
  <a href="https://go-skill-icons.vercel.app/">
    <img
      src="https://go-skill-icons.vercel.app/api/icons?i=javascript,react,tailwindcss,antdesign,php,python,mysql,postgres,docker,supabase,vercel,postman,&theme=dark"
    />
  </a>
</p>



## A FINDING HOME RESPONSIVE WEBSITE WITH INTERGRATED RECOMMENDATION SYSTEM

This website is designed to help users easily **find rooms** according to their needs. 
Additionally, users can **receive suggestions** for rooms. Furthermore, users can **find rooms through a map** and **view nearby amenities**

## :white_check_mark:Deploy Link

:arrow_right:User Link [https://find-home-4mvp23usf-anh-nguyens-projects-e4ee1749.vercel.app/](https://find-home-4mvp23usf-anh-nguyens-projects-e4ee1749.vercel.app/)

:arrow_right: System Link [https://find-home-4mvp23usf-anh-nguyens-projects-e4ee1749.vercel.app/system/manage-post-system](https://find-home-4mvp23usf-anh-nguyens-projects-e4ee1749.vercel.app/system/manage-post-system)

# :point_right: Admin Account

:point_right: Email: tnp08032000@gmail.com

:point_right: Password: Phu123@@

# :key:Table of contents

:arrow_right:1.[Introduction](https://github.com/anhnnguyen1312/FindingHome/blob/main/README.md#clipboardintroduction)

:arrow_right:2.[Tech Stack](https://github.com/anhnnguyen1312/FindingHome/blob/main/README.md#wrenchtechnologies)

:arrow_right:3.[Features](https://github.com/anhnnguyen1312/FindingHome/blob/main/README.md#triangular_flag_on_postfeatures)

:arrow_right:4.[Installation](https://github.com/anhnnguyen1312/FindingHome/blob/main/README.md#gearinstallation)

:arrow_right:5.[Demo](https://github.com/anhnnguyen1312/FindingHome/blob/main/README.md#demo)



## :clipboard:Introduction 

Our system is designed to help users **quickly find rooms, houses, or commercial spaces** that best match their criteria.
The website’s key advantage is its **recommendation system**, which broadens users' options and shortens the time required to find a suitable accommodation.
Additionally, users can search based on the **map** we provide. All listings are strictly vetted by us before being made public to other users.
The system features several notable functions:
including displaying the **location of the accommodation** and **nearby amenities on the map**, 
**notification functionality for new posts** , the ability to **save favorite listings**, 
and showing the total number of **likes** for a listing or the aggregate likes across all of a user's listings. **Email verification** for users is also included.
**For administrators**, there is functionality to **manage all users** and their **posts**.
All listings must be **approved by the admin**, which helps minimize risks for users when searching for accommodation.


## :wrench:Technologies
:point_right: Front-end: ReactJs framework, Tailwindcss, Antd

:point_right:Back-end: CodeIgniter3 framework

:point_right:Database: Navicat, Postgresql

:point_right: Machine learning: Python(Flask)

:point_right: Other: Docker, Cloundinary

:point_right: Deploy platform : Vercel(FrontEnd), Render(BackEnd), Supabase(Postgresql DB)


## :triangular_flag_on_post:Features
:dart:**User system features**

:white_check_mark: Authentication

:white_check_mark:Manage posts and create new posts

:white_check_mark:Searching and filter

:white_check_mark:Viewing detailed posts and landlords profile

:white_check_mark:Notifications

:white_check_mark:Like posts


:dart:**Admin system features**

:white_check_mark: Managing posts

:white_check_mark:Managing users

:white_check_mark:Notifications


:dart:**Mapbox and Viet Map API**

:white_check_mark:Using Mapbox to display location 

:white_check_mark: Suggest nearby amenities


:dart:**Recommend similar posts by machine learning**

:white_check_mark:suggest accommodations based on authentication

:white_check_mark:suggest accommodations based on user behavior (likes, nearest location)

:white_check_mark:suggest accommodations based on room features that user are viewing (price range and type and area size)



## :gear:Installation 

**1. Install dependencies**

:wrench:Install python dependencies:

		step 1: move to folder python on project folder
  
		step 2: open CMD on this folder
  
		step 3: copy and pass "pip install -r requirements.txt" to command line and enter to install python dependencies.
  
	:wrench: Install react dependencies:
 
		step 1: move to folder react on project folder
  
		step 2: open CMD on this folder
  
		step 3: copy and pass "npm i" to command line and enter to install react dependencies.
  
**2.Runing our system:**

:wrench:build docker container:

		step 1: move to project folder
  
		step 2: open CMD on this folder
  
		step 3: copy and pass "docker-compose up --build -d" to command line and enter to build docker container. it maybe take a long time. 
  
		step 4: go to docker desktop to run whole containder. ( if all containders are really runing. you can ignore this step).
  
	:wrench:run python file:
 
		step 1: move to python folder on project folder
  
		step 2: open CMD on this folder
  
		step 3: copy and pass "start python recommend.py" to command line and enter to install fist file python. (please don't close python.exe)
  
  
	:wrench: run react project:
 
		step 1: move to folder react on project folder
  
		step 2: open CMD on this folder
  
		step 3: copy and pass "npm start" to command line and enter to run react project.
  
		step 4: go to "http://localhost:3000/" and **WELLCOME TO OUR SYSTEM**
  

## Demo
**HomePage**

![image](https://github.com/user-attachments/assets/80f41148-1a4f-45de-b99c-c63e5875d758)

**Responsive**

![image](https://github.com/user-attachments/assets/aae89ca4-184f-4532-b536-68492a1b56dc)


**Detail Post**

![detail](https://github.com/user-attachments/assets/401b95b7-ae4f-43c9-a313-2411d1e3f2c3)
![detail2](https://github.com/user-attachments/assets/8b3a3bbe-f25c-46ea-9299-530b4c8cf535)


**Recomemdation**

![image](https://github.com/user-attachments/assets/070826d2-9969-417c-bff4-c4d937821750)

**Find Room by interact with mapbox**

![image](https://github.com/user-attachments/assets/fca3267a-71d5-48ab-ad0a-3f2d7b5f05f4)



**Calculate distance and time travel from room to any location on map**

![image](https://github.com/user-attachments/assets/b416ef47-c1cf-4cb0-a4c3-fa975def677d)

**Update profile**

![updateprofile](https://github.com/user-attachments/assets/a465a2b3-4915-414a-bfca-96029c066a1e)

**Manage Posts**

![image](https://github.com/user-attachments/assets/06a9af08-e2a8-4180-a240-555b601a999c)

**post new room**

![postnew](https://github.com/user-attachments/assets/3f4480a1-4b44-40f8-bd44-05fa8f280be1)

**Like room**

![like](https://github.com/user-attachments/assets/acfe1459-97c9-4282-9a32-e58059b8e348)
![likepage](https://github.com/user-attachments/assets/49d0b719-47d5-4c5f-b114-83196656e9f9)

**Notification**

![noti](https://github.com/user-attachments/assets/413ef8d9-3fbe-4dc2-b223-372c3e73790f)
![noti2](https://github.com/user-attachments/assets/65224de1-ef73-4c33-ad8b-19ddc4c59bfb)

**Delete post**

**System UI**

![delete](https://github.com/user-attachments/assets/9dbb4f26-8f05-4f54-97aa-52db9815b173)

**Manage User**

![manageuser](https://github.com/user-attachments/assets/44507db1-6bfa-4ba6-b178-60be73cd49f4)
![image](https://github.com/user-attachments/assets/26bb99cc-2478-4dee-96ad-546e12854d4c)

**Manage Post**

![image](https://github.com/user-attachments/assets/119e0863-00c7-4442-a678-0765aa067f5f)

