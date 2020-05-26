import React from 'react'
import ProfileBox from '../../components/profile/profilebox/profilebox'

export default function Profile({ profile }) {
    return (
        <ProfileBox profile={profile}/>
    )
}

export async function getStaticProps() {
    // const { profile, error } = useSWR('/api/placeholder', fetcher)
    // const fetcher = url => fetch(url).then(r => r.json())

    // Get external data from the file system, API, DB, etc.
  
    // The value of the `props` key will be
    //  passed to the `Home` component
    // if(!error && data) return profile;
    // else return {
    //     "name": "ASDF"
    // };


    console.log("Hello, world")
    // test data for the profile 
    return{
        props: {
            profile: {
                "id": 2,
                "firstName": "Johnny",
                "lastName": "Edgett",
                "storage": [],
                "property": [],
                "profileType": "USER_PROFILE",
                "createdAt": "2020-05-26T21:20:17.001",
                "updatedAt": "2020-05-26T21:20:17.001"
            }
        }
    } 
  }