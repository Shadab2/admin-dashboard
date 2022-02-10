import React from "react";
import "./widgetLg.css";

function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={`widgetButton ${type}`}>{type}</button>;
  };
  return (
    <div className="widget-lg">
      <h3 className="widgetLg-title">Latest Transactions</h3>
      <table className="widgetLg-table">
        <tr className="widgetLg-tr">
          <th className="widgetLg-th">Customers</th>
          <th className="widgetLg-th">Date</th>
          <th className="widgetLg-th">Amount</th>
          <th className="widgetLg-th">Status</th>
        </tr>
        <tr className="widgetLg-tr">
          <td className="widgetLg-user">
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" />
            <span>Sam Wilson</span>
          </td>
          <td className="widget-amount">54.8$</td>
          <td className="widget-date">23.09.22</td>
          <td className="widget-status">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLg-tr">
          <td className="widgetLg-user">
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" />
            <span>Sam Wilson</span>
          </td>
          <td className="widget-amount">54.8$</td>
          <td className="widget-date">23.09.22</td>
          <td className="widget-status">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLg-tr">
          <td className="widgetLg-user">
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" />
            <span>Sam Wilson</span>
          </td>
          <td className="widget-amount">54.8$</td>
          <td className="widget-date">23.09.22</td>
          <td className="widget-status">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLg-tr">
          <td className="widgetLg-user">
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" />
            <span>Sam Wilson</span>
          </td>
          <td className="widget-amount">54.8$</td>
          <td className="widget-date">23.09.22</td>
          <td className="widget-status">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLg-tr">
          <td className="widgetLg-user">
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" />
            <span>Sam Wilson</span>
          </td>
          <td className="widget-amount">54.8$</td>
          <td className="widget-date">23.09.22</td>
          <td className="widget-status">
            <Button type="Declined" />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default WidgetLg;
