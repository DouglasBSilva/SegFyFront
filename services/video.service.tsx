
import axios from 'axios';
export default class VideoService{
    static urlBase = 'http://ec2-3-16-69-198.us-east-2.compute.amazonaws.com/api/video';
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