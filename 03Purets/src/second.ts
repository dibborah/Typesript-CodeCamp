// interface TakePhoto {
//     cameraMode: string,
//     filter: string,
//     burst: number,
// }

// class Instagram implements TakePhoto {// What you do w/ TakePhoto is not cared by interface and that is your own business
//     // Interface is when declaring one has to follow this rules
//     constructor(
//         public cameraMode:string,
//         public filter:string,
//         public burst:number,
//     ){}
// }

// interface Story {
//     createStory(): void
//     // createStory: () => void
// }

// class Youtube implements TakePhoto, Story{ // Since class is a template so we need to and we are going to create instances by it so being a template like types also has to be defined even if it is just implementing an interface with the already pre-defined types
//     constructor(
//         public cameraMode:string,
//         public filter:string,
//         public burst:number,
//         public short: string,
//     ){}

//     createStory(): void {
//         console.log("Story was created");
//     }
// }

// #Note: When CLASSes inherits INTERFACEes we use the keyword "IMPLEMENTS" 


