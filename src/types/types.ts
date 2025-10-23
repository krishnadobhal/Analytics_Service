import type { BaseQueryParams, DataFormat, ResultSet } from "@clickhouse/client"
import e from "express"
import { Interface } from "readline"

export interface QueryParams extends BaseQueryParams {
    // Query to execute that might return some data.
    query: string
    // Format of the resulting dataset. Default: JSON.
    format?: DataFormat
}

export interface ClickHouseClient {
    query(params: QueryParams): Promise<ResultSet<DataFormat>>
}

export interface User {
    id: string;
    password_hash: string;
    email: string;
    created_at: Date;
    username: string;
}

export interface Url {
    id: string;
    original_url: string;
    short_code: string;
    click_count: string;
    user_id: string;
    created_at: number;
}