interface TakePhoto {
    cameraMode: string,
    filter: string,
    burst: number,
}

class Instagram implements TakePhoto {// What you do w/ TakePhoto is not cared by interface and that is your own business
    // Interface is when declaring one has to follow this rules
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number,
    ){}
}

class Youtube implements TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number,
    ){}
}

