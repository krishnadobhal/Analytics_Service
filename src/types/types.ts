import type { BaseQueryParams, DataFormat, ResultSet } from "@clickhouse/client"

export interface QueryParams extends BaseQueryParams {
    // Query to execute that might return some data.
    query: string
    // Format of the resulting dataset. Default: JSON.
    format?: DataFormat
}

export interface ClickHouseClient {
    query(params: QueryParams): Promise<ResultSet<DataFormat>>
}