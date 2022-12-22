import { createContext, useState , useEffect } from 'react';

export const DataContext = createContext(null);



const getLocalNotes= () =>
{
    let list = localStorage.getItem('notes');
    if ( list )
    {
        return JSON.parse(localStorage.getItem('notes'));
    }
    else
    {
        return [];
    }
}


const getLocalArchives= () =>
{
    let list = localStorage.getItem('archives');
    if ( list )
    {
        return JSON.parse(localStorage.getItem('archives'));
    }
    else
    {
        return [];
    }
}

const getLocalDeletes= () =>
{
    let del = localStorage.getItem('del');
    if ( del )
    {
        return JSON.parse(localStorage.getItem('del'));
    }
    else
    {
        return [];
    }
}

const DataProvider = ({ children }) => {

    const [notes, setNotes] = useState(getLocalNotes());
    const [archiveNotes, setAcrchiveNotes] = useState(getLocalArchives());
    const [deleteNotes, setDeleteNotes] = useState(getLocalDeletes());

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
  
    }, [notes])
    
    useEffect(() => {
        localStorage.setItem('archives', JSON.stringify(archiveNotes))
  
    }, [archiveNotes]);
    
    
    useEffect(() => {
        localStorage.setItem('del', JSON.stringify(deleteNotes))
  
    }, [deleteNotes]);

    return (
        <DataContext.Provider value={{
            notes,
            setNotes,
            archiveNotes,
            setAcrchiveNotes,
            deleteNotes,
            setDeleteNotes
        }}
        >
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;