"use server"
import {profile} from "@/lib/fakeData";

export const getProfile=async ()=>{
   return  await Promise.resolve(profile)
}