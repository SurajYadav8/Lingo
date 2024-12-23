import { Button } from "@/components/ui/button";
import Image from "next/image";
export const Footer = () => {
    return (
        <footer className="h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="/IN.png" alt="Bharat" height={32} width={40} className="mr-4 rounded-md"/>
                    BH
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="/USA.png" alt="United States" height={32} width={40} className="mr-4 rounded-md"/>
                     USA
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="/U.K.png" alt="United Kingdom" height={32} width={40} className="mr-4 rounded-md"/>
                    UK
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="/Canada.png" alt="" height={32} width={40} className="mr-4 rounded-md"/>
                    CAN
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="/Australia.png" alt="" height={32} width={40} className="mr-4 rounded-md"/>
                    AUS
                </Button>
            </div>
        </footer>
    );
};