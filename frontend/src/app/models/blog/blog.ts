export class Blog {
  [x: string]: any;
  _id: String;
  title: String;
  description: String;
  img: String;
  text: String;
  category: String;

  createdAt : Date;
  auth: string;
}
// comments: [
//     {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Comment",
//     },
// ],
// }
