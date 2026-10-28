# ION API Methods (IONAPIMethods form, Execute in Place, 14 rows), read 2026-10-27
| # | Server | Suite | HTTP | Method | Path | Description |
|---|---|---|---|---|---|---|
| 1 | 1 | Infor WMS | GET | getAllowance | /wmwebservice_rest/labor/allowance/{allowance_name}/{allowance_type}/{default_percent} | Find a single allowance by allowance_name |
| 2 | 1 | Infor WMS | POST | listInventory | /wmwebservice_rest/{warehouse}/inventory/list | List inventory records based on JSON constraints |
| 3 | 1 | Infor WMS | POST | postReceiptLineASN | /wmwebservice_rest/{warehouse}/advancedshipnotice/{receiptkey}/lines | Create or replace an existing order line. |
| 4 | 0 | Infor WMS | GET | getShipmentByExternKey | /wmwebservice_rest/{warehouse}/shipments/externorderkey/{externorderkey} | Find a single order by external key |
| 5 | 1 | Infor WMS | GET | getFacilities | /wmwebservice_rest/enterprise/facilities | Return a list of facilities for this tenant |
| 6 | 1 | Infor WMS | POST | postLotxIDDetail | /wmwebservice_rest/{warehouse}/lotxiddetails | Create or replace an existing lotxiddetail. |
| 7 | 0 | Infor WMS | GET | getShipment | /wmwebservice_rest/{warehouse}/shipments/{orderkey} | Find a single order by key |
| 8 | 1 | Infor WMS | GET | getShipment | /wmwebservice_rest/{warehouse}/shipments/{orderkey} | Find a single order by key |
| 9 | 1 | Infor WMS | GET | getExportEvents | /wmwebservice_rest/{warehouse}/exports | Gets a list of events ready for export using query parameters |
| 10 | 1 | Infor WMS | GET | getOwner | /wmwebservice_rest/{warehouse}/owners/{storerkey} | Find a single owner by storerkey |
| 11 | 1 | Infor WMS | GET | getShipmentByExternKey | /wmwebservice_rest/{warehouse}/shipments/externorderkey/{externorderkey} | Find a single order by external key |
| 12 | 1 | Infor WMS | POST | postPickDetail | /wmwebservice_rest/{warehouse}/pickdetails | Create or update an existing pickdetail. |
| 13 | 1 | Infor WMS | GET | helloworld | /wmwebservice_rest/v1/feature/helloworld | (none) |
| 14 | 1 | Infor WMS | GET | getAdvanceShipNotice | /wmwebservice_rest/{warehouse}/advancedshipnotice/{receiptkey} | Find a single advanced ship notice (receipt) by key |

No Data Fabric methods are defined. Rows 4 and 7 reference server ID 0, which does not exist (orphans).
Note: getExportEvents is a GET but may mark events as exported on the WMS side, so it is NOT treated as harmless.
