import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {AddressCategory} from "./enums";
import {Contact} from "./contact";

@Entity()
export class Address {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "enum",
        enum: AddressCategory,
        nullable: false,
        default: AddressCategory.Home
    })
    category: AddressCategory;

    @Column()
    isPrimary: boolean;

    @Column()
    country: string;

    @Column()
    district: string;

    @Column()
    county: string;

    @Column({nullable: true})
    subCounty?: string;

    @Column({nullable: true})
    village?: string;

    @Column({nullable: true})
    parish?: string;

    @Column({nullable: true})
    postalCode?: string;

    @Column({nullable: true})
    street?: string;

    @Column({nullable: true})
    freeForm?: string;

    @Column({nullable: true})
    latLon?: string;

    @Column({nullable: true})
    placeId?: string;

    @JoinColumn()
    @ManyToOne(type => Contact, it => it.addresses, {nullable: false})
    contact: Contact
}
