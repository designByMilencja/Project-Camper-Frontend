import { CountryEntity } from "types";

interface Props {
    form: {
        idCountry: string;
    };
    countriesData: CountryEntity[] | null;
    saveForm: (name: string, value: string) => void;
}

export const SelectCountry = ({ form, countriesData, saveForm }: Props) => {
    return (
        <select
            value={form.idCountry}
            onChange={e => saveForm('idCountry', e.target.value)}
            required>
            <option>--</option>
            {countriesData?.map((country: CountryEntity) => (
                <option key={country.name} value={country.id}>
                    {country.name}
                </option>
            )) ?? []}
        </select>
    );
}

