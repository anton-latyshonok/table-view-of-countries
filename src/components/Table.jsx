import React, {useMemo} from "react";
import "antd/dist/antd.css";
import {Preloader} from "./Preloader/Preloader";
import {Table} from "antd";
import {columns} from "./Columns";
import {useContextFunction} from "./Context";

export const TableOfCountries = () => {
    const {data} = useContextFunction();
    const dataSorted = useMemo(() => {
        if (data)
            return data.countries.map((country, i) => {
                return {...country, key: i + 1, continent: country.continent.name}
        });
    }, [data]);

    if (data) {
        return (
            <Table
                columns={columns}
                dataSource={dataSorted}
                sticky={true}
                bordered={true}
            />
        );
    } else {
        return (
            <Preloader />
        );
    }
};
