export const ButtonRedirect = ({children, link}) => {
    return <button className='mt-4 w-auto h-auto bg-yellow p-3 rounded-md text-center hover:bg-amber-50 transition duration-500'>
        <a className='font-bold text-lg text-black' target="_blank" rel="noreferrer" href={link}>
            {children}
        </a>
    </button>
}

