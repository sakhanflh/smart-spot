import { Header } from "../components/layouts/Header";
import MaxLayout from "../components/layouts/MaxLayout";
import { AboutWebsiteSection } from "../components/layouts/home/AboutWebsiteSection";
import { HeroSection } from "../components/layouts/home/HeroSection";

export default function HomePage() {
    return (
        <MaxLayout>
            <Header/>
            <div className="bg-background-color">
                <HeroSection/>
                <AboutWebsiteSection/>
            </div>
        </MaxLayout>
    )
}