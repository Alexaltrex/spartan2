import src0 from "../../assets/png/card0.png";
import src1 from "../../assets/png/card1.png";
import src2 from "../../assets/png/card2.png";
import src3 from "../../assets/png/card3.png";
import src4 from "../../assets/png/card4.png";
import src5 from "../../assets/png/card5.png";

export interface ICard {
    src: string
    title: string
    description: string
}

export const cards: ICard[] = [
    {
        src: src0,
        title: "Unlimited Access to All Spartan Events Worldwide",
        description: "Trails, obstacles, fitness challenges, you decide: This global pass is for all Spartan events worldwide for up to 9 years.",
    },
    {
        src: src1,
        title: "Exclusive Merch Drops",
        description: "Unbreakable branded Spartan merchandise for NFT holders only.",
    },
    {
        src: src2,
        title: "Enshrine Your Name In History",
        description: "Those who mint this NFT will have their name inscribed on a memorial dedicated to the “Spartan 300” in Ancient Sparta.",
    },
    {
        src: src3,
        title: "Future Airdop",
        description: "Holders will be rewarded with a one-of-a-kind NFT created by a world-renowned artist and airdropped into their wallet.",
    },
    {
        src: src4,
        title: "Be Unbreakable Event",
        description: "This is an epic 3-day event at a surprise exclusive global location. This annual event is for NFT pass holders only.",
    },
    {
        src: src5,
        title: "VIP Treatment",
        description: "Express Event Registration, VIP Area, and Recovery Tent at Spartan events in certain markets.",
    },
]