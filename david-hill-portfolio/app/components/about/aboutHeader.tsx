const AboutHeader = () => {
    return ( 
        <ul className="
        flex
        justify-center
        lg:justify-start
        cursor-pointer
        w-full 
        font-extrabold
        text-4xl 
        text-tertiary
        hover:[&>*:nth-child(1)]:animate-wiggle
        hover:[&>*:nth-child(2)]:animate-wiggle
        hover:[&>*:nth-child(3)]:animate-wiggle
        hover:[&>*:nth-child(4)]:animate-wiggle
        hover:[&>*:nth-child(5)]:animate-wiggle 
        hover:[&>*:nth-child(6)]:animate-wiggle
        hover:[&>*:nth-child(7)]:animate-wiggle
        hover:[&>*:nth-child(8)]:animate-wiggle
        hover:[&>*:nth-child(9)]:animate-wiggle
        hover:[&>*:nth-child(10)]:animate-wiggle
        hover:[&>*:nth-child(11)]:animate-wiggle
        ">
            <li>M</li>
            <li>o</li>
            <li>r</li>
            <li className="mr-2">e</li>
            <li>A</li>
            <li>b</li>
            <li>o</li>
            <li>u</li>
            <li className="mr-2">t</li>
            <li>M</li>
            <li>e</li>
        </ul>
     );
}
 
export default AboutHeader;