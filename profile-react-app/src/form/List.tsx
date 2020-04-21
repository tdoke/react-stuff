import * as React from "react";
import { Record } from "./Form";
export interface ListProps {
  records: Record[] | undefined;
}

export const List: React.SFC<ListProps> = React.memo(({ records = [] }) => {
  return (
    <div>
      {records &&
        records.map((record, index) => (
          <label key={index}>{`${record.firstName}--${record.lastName}`}</label>
        ))}
    </div>
  );
});

