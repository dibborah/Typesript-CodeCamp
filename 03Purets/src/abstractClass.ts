// abstract class TakePhoto {
//     constructor(
//         public cameraMode: string,
//         public filter: string
//     ){}
//     abstract getSepia(): void
//     // abstract getSepiaz: () => number
//     getReelTime(): number{// Since this method is not defined as abstract when another class is derived from this class this method is not needs their to be defined . That's it's usage. This is the power of abstract class. This doesnot gives me problem being in the realm of typescript
//         // some complex calculation
//         return 8;
//     }
// }


// class Instagram extends TakePhoto{

//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: number
//         ){
//             super(cameraMode, filter)
//         }
//         getSepia(): void {
//             console.log("Sepia");            
//         }

// }

// const hc = new Instagram("test", "Test", 7);

// // hc.getReelTime(); //### Now see here I have create an instance/object ...

// // ... from an derived class Instagram and used a method which is not even 
// // mentioned their. Since it was in the non-abstract scoe of the abstract
// //  class TAKEPHOTO which is the super class of class INSTAGRAM from where 
// // this object/instance is being created
