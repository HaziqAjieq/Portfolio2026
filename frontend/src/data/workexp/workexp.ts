interface WorkExperience { 
    id: number,
    company:string,
    role:string,
    description:string,
    startDate:string,
    endDate:string
}

export const workexperience : WorkExperience[] = [
    {
    id:1,
    company:"Gerbang Alaf Restaurant.sdn.bhd (McDonald)",
    role:"Department Manager",
    description:"Managing Schedule,shift,payroll",
    startDate:"2016",
    endDate:"2021",
    },
    {
    id:2,
    company:"Zuspresso (Zus Coffee)",
    role:"Barista",
    description:"Full time barista",
    startDate:"2025",
    endDate:"present"
    }

]

