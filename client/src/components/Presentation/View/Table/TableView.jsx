import styles from "./TableView.module.css";
import { Button } from "react-bootstrap";
export default function TableView({ columns, data, onAction }) {
  return (
    <div
      className={`${styles.tableContainer} shadow-sm rounded-4 overflow-hidden`}
    >
      <table className={`${styles.customTable} w-100 mb-0`}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="text-uppercase text-secondary fw-semibold small"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row) => (
              <tr key={row.id}>
                {columns.map((col) => (
                  <td key={col.key}>
                    {col.type === "Link" ? (
                      <Button
                        size="sm"
                        variant="link"
                        onClick={() => onAction(row.id)}
                      >
                        {row[col.displayKey] || row[col.key]} Join
                      </Button>
                    ) : (
                      row[col.key]
                    )}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center py-4 text-muted"
              >
                No data available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
