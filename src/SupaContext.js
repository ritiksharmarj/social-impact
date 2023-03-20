import React, { useState, useEffect } from 'react'
import { supabase } from './supabase'

export const SupaContext = React.createContext();

export const SupaProvider = ({ children }) => {
    // State variables for appUsers and complaintDetails data
    // const [appUsers, setAppUsers] = useState([])
    const [complaintDetails, setComplaintDetails] = useState([])
  
    // // Fetch appUsers data from supabase
    // const fetchAppUsers = async () => {
    //   try {
    //     let { data: users, error } = await supabase
    //       .from('appUsers')
    //       .select('*')
    //     if (error) throw error
    //     setAppUsers(users)
    //   } catch (error) {
    //     console.error(error)
    //   }
    // }
  
    // Fetch complaintDetails data from supbse
    // const fetchComplaintDetails = 
  
    // Fetch data when component mounts or when dependencies change
    useEffect(() => {
    //   fetchAppUsers()
      // fetchComplaintDetails()
      (async () => {
        try {
          let { data: complaints, error } = await supabase
            .from('complaintDetails')
            .select('*')
          if (error) throw error
          setComplaintDetails(complaints)
        } catch (error) {
          console.error(error)
        }
      })()
  }, [])
    
    // Pass state variables as value to context provider
    return (
      <SupaContext.Provider value={{ complaintDetails:[complaintDetails, setComplaintDetails] }}>
        {children}
      </SupaContext.Provider>
    )
  }