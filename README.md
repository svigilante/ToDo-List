
# TodoList

## Backend REST Api
**NestJS 8.0.0**

This is the  API folder: **[api](https://github.com/svigilante/ToDo-List/tree/main/apps/api)**.

Inside we will see the ["src"](https://github.com/svigilante/ToDo-List/tree/main/apps/api/src) folder, which contains the ["app"](https://github.com/svigilante/ToDo-List/tree/main/apps/api/src/app) folder where we can find the following files:
- **[app.service.ts](https://github.com/svigilante/ToDo-List/blob/main/apps/api/src/app/app.service.ts)** ( _It encapsulates the application's business logic._ )
- **[app.controller.ts](https://github.com/svigilante/ToDo-List/blob/main/apps/api/src/app/app.controller.ts)** ( _Related to mapping the business input/output._  )

Outside the api there's a folder named [shared-types](https://github.com/svigilante/ToDo-List/tree/main/libs/shared-types) which has the **[shared-types.ts](https://github.com/svigilante/ToDo-List/blob/main/libs/shared-types/src/lib/shared-types.ts)** file in _(["ToDo-List/libs/shared-types/src/lib/shared-types.ts"](https://github.com/svigilante/ToDo-List/blob/main/libs/shared-types/src/lib/shared-types.ts)_). Here it's defined the **Todo interface**.

## Frontend
**ReactJS 17.0.2**

This is the  Frontend folder: **[web-app](https://github.com/svigilante/ToDo-List/tree/main/apps/web-app)**.

The main "App" file is **[app.tsx](https://github.com/svigilante/ToDo-List/blob/main/apps/web-app/src/app/app.tsx)**, it can be found in _["ToDo-List/apps/web-app/src/app/app.tsx"](https://github.com/svigilante/ToDo-List/blob/main/apps/web-app/src/app/app.tsx)_.

There's a folder named [data-access](https://github.com/svigilante/ToDo-List/tree/main/apps/web-app/src/app/utils/lib/data-access) (in _[ToDo-List/apps/web-app/src/app/utils/lib/data-access](https://github.com/svigilante/ToDo-List/tree/main/apps/web-app/src/app/utils/lib/data-access)_.) which contains a custom Hook named _[useTodoList](https://github.com/svigilante/ToDo-List/blob/main/apps/web-app/src/app/utils/lib/data-access/data-access.tsx)_ that allows us to share the business logic with other applications. 

(_For example we could share the business logic between the React app and a React Native app_.)

It is defined in the **[data-access.tsx](https://github.com/svigilante/ToDo-List/blob/main/apps/web-app/src/app/utils/lib/data-access/data-access.tsx)** file ( _[ToDo-List/apps/web-app/src/app/utils/lib/data-access/data-access.tsx](https://github.com/svigilante/ToDo-List/blob/main/apps/web-app/src/app/utils/lib/data-access/data-access.tsx)_ ).



## 🚀 The App!

![export_0](https://user-images.githubusercontent.com/90156823/160018661-bda7d293-aa83-4d65-9762-b6798a19d341.GIF)


(_We can see towards the end of the gif that if we reload the page the changes made in our ToDo app remain because the api server retains all the neccesary info_)
