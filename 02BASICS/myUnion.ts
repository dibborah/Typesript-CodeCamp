let score: number | string;
score = 78;
// score = 'sevent-eight';// Single quote can also be used
score = "sevent-eight";

type User = {
  name: string;
  id: number;
  cardNumber ?:number;// this cardNumber property is written with only purpose of practicing the ?: optional property and nothing else// This is not used to explained UNION not also in the codeCamp video from where you are now learning this topic
};

type Admin = {
  username: string;
  id: number;
};

let dibya: User | Admin = { name: "dibya", id: 567};
dibya = { username: "dib", id: 123};

