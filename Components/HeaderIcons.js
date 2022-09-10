
const HeaderIcon = ({Icon,active}) => {
    return (
        <div className="flex items-center cursor-pointer md:px-10 sm:h-30 h-14 md:hover:bg-gray-100 rounded-xl
        active:border-b-2 active:border-blue-500 hover:text-blue-700
        
        ">
            <Icon
            className = {`${active && 'text-blue-500'} h-5 group-hover:text-blue-500 items-center sm:h-7 mx-auto text-gray-500`}
            />
        </div>
    );
}

export default HeaderIcon;
