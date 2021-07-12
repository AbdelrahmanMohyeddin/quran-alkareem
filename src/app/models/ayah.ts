
export class ayahs{
    code:number;
    status:string;
    data:{
        number:number;
        name:string;
        englishName:string;
        englishNameTranslation:string;
        numberOfAyahs:number;
        revelationType:string;
        ayahs:Array<{
            number:number;
            text:string;
            numberInSurah:number;
            juz:number;
            page:number;
            ruku:number;
            hizbQuarter:number;
            sajda:boolean;
        }>
    }
}