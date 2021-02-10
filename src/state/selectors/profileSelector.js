
export const getName= state => state.profile.info.personInfo.name

export const getPhoto= state => state.profile.info.personInfo.photo

export const getProfileFetchingInfo= state => state.profile.isFetching

export const getStatusText= state => state.profile.info.status

export const getStatePostsData = state => state.profile.posts.postsData

export const getAboutMe = state => state.profile.info.personInfo.aboutMe

export const getLookingForAJobInfo = state => state.profile.info.lookingForAJob

export const getLookingForAJobDescription = state => state.profile.info.lookingForAJobDescription

export const getContacts = state => state.profile.info.contacts

export const getPostID = state => state.profile.posts.newPostID

// export const getPostsData = createSelector(getStatePostsData, (postsData)=>{
//   return postsData.map((data) => {
//     return <Post name={data.name} key={data.postID} time={data.date} content={data.content}
//                  likesCount={data.likesCount} ava={data.photo}/>;
//   });
// })

