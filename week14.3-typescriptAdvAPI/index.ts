//Prerequisited
// interface User {
//   name: string;
//   age: number;
// }

// function sumOfAge(user1: User, user2: User) {
//   return user1.age + user2.age;
// }

// const user1: User = {
//   name: "Garv",
//   age: 20,
// };

// const user2: User = {
//   name: "What",
//   age: 20,
// };

// const result = sumOfAge(user1, user2);
// console.log(result);

//Pick and Partial

// interface User {
//   id: number;
//   name: string;
//   age: number;
// }

// type UpdateProps = Pick<User, "name" | "age">;
// type UpdatePropsPartial = Partial<UpdateProps>;

// function updateUser(updateObject: UpdateProps) {
//   //FUNCTION HIT WHEN USER WNATS TO UPDATE HIS PROFILE
// }

//Readonly

// type User = {
//   readonly name: string; //either readonly for required attribute
//   readonly age: number;
// };

// const user: Readonly<User> = {
//   //also we can set readonly on full interface or type
//   name: "Garv",
//   age: 20,
// };

// //Use Case
// interface Config {
//   apiKey: string;
//   port: number;
// }

// const config: Readonly<Config> = {
//   apiKey: "123123-1asdasd-12312312",
//   port: 5000,
// };

// //Record

// interface User {
//   name: string;
//   age: number;
// }

// // type Users = { //object containing multiple users
// //   [key: string]: User;
// // };

// //or we can use record

// type Users = Record<string, User>;

// const users: Users = {
//   "1e1e1e1": { name: "Garv", age: 20 },
//   "1w1w1w1w": { name: "Wait", age: 22 },
// };

//Also you can use Maps like in c++
//this is a JS concept not a TS one
// interface User {
//   name: string;
//   age: number;
// }
// // const users = new Map();
// // users.set("1e1e1e1", { name: "Garv", age: 20 });
// // users.set("1w1w1w1", { name: "Wait", age: 20 });
// // console.log(users.get("1e1e1e1"));

// //in TS
// const users = Map<string, User>

//Exclude , Reverse of Pick

// type EventType = "click" | "scroll" | "mousemove";
// type ExcludeEvent = Exclude<EventType, "scroll">;

//Type inference in zod - Given a zod schema we can infer its type in TS using z.infer
// import z from "zod";
// const userProfileSchema = z.object({
//   name: z.string().min(1, { message: "Name cannot be empty" }),
//   email: z.string().email({ message: "Invalid email format" }),
//   age: z
//     .number()
//     .min(18, { message: "You must be at least 18 years old" })
//     .optional(),
// });

// type FinalUserSchema = z.infer<typeof userProfileType>;

// app.put("/success", (req, res) => {
//     const {success} = userProfileSchema.safeParse(req.body);
//     const updatedBody: FinalUserSchema = req.body;

// })
