export abstract class ServiceBase{
    static API_URL="https://grounded-friends-74663aced5.strapiapp.com/api";
    static getUrl(path:string){
        return `${this.API_URL}${path}`
    }
}