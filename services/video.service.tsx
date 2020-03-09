
import axios from 'axios';
export default class VideoService{
    static urlBase = 'http://localhost:8000/api/video';
    static get(term, pageToken = null){

        return axios.get(VideoService.urlBase, {
            params: {
                term: term,
                pageToken: pageToken
            }
          });
    }


    static find(id: string){
        return axios.get(VideoService.urlBase+`/${id}`);
    }


    static store(param){
        // axios.post(param, );
    }


    static update(param){
        // axios.put(param, );
    }


    static delete(param){
        // axios.delete(param);
    }


}