import SocialMediaIcons from "../components/SocialMediaIcons";

export const Footer = () => {

    return (
        <footer className='h-64 bg-light-blue pt-10'>
            <div className='w-5/6 mx-auto'>
                <SocialMediaIcons/>
                <div className='flex justify-center md: justify-between text-center'>
                    <p className='font-opensans font-semibold text-2xl text-yellow'>Shengge(Dempsey) Zhang</p>
                    <p className='font-opensans text-xl text-yellow'>©2024 Zhang. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}
