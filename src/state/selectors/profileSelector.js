import {createSelector} from 'reselect';
import Post from '../../components/Profile/Posts/Post/Post';

export const getName= state => state.profile.info.personInfo.name

export const getPhoto= state => state.profile.info.personInfo.photo

export const getProfileFetchingInfo= state => state.profile.isFetching

export const getStatusText= state => state.profile.info.status

const getStatePostsData = state => state.profile.posts.postsData


export const getPostsData = createSelector(getStatePostsData, (postsData)=>{
  return postsData.map((data) => {
    return <Post name={data.name} time={data.date} content={data.content}
                 likesCount={data.likesCount} ava={data.photo}/>;
  });
})

