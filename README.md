### Request methods

The request method is the way we distinguish what kind of action our endpoint is being "asked" to perform. But we also have a few other methods that we use quite often.

| Method   | Description                              |
| -------- | ---------------------------------------- |
| `GET`    | Used to retrieve a single item or a collection of items. |
| `POST`   | Used when creating new items e.g. a new user, post, comment etc. |
| `PATCH`  | Used to update one or more fields on an item e.g. update e-mail of user. |
| `PUT`    | Used to replace a whole item (all fields) with new data. |
| `DELETE` | Used to delete an item.                  |

### Examples

Now that we’ve learned about the anatomy of our endpoints and the different request methods that we should use, it’s time for some examples:

**Base Url** :
https://backend-capstone-api-seven.vercel.app/

| Method   | URL                                      | Description                              |
| -------- | ---------------------------------------- | ---------------------------------------- |
| `GET`    | `/article/canggu`                        | Retrieve all canggu                      |
| `GET`    | `/article/kintamani`                     | Retrieve all kintamani                   |
| `GET`    | `/article/seminyak`                      | Retrieve all seminyak                    |
| `GET`    | `/article/ubud`                          | Retrieve all ubud                        |
| `GET`    | `/article/kuta`                          | Retrieve all kuta                        |
| `GET`    | `/article/nusadua`                       | Retrieve all nusadua                     |
| `GET`    | `/article/detail/{:id}`                  | Retrieve detail by id                    |

| Method   | URL                                      | Description                              |
| -------- | ---------------------------------------- | ---------------------------------------- |
| `GET`    | `/threads`                               | Retrieve all threads                     |
| `POST`   | `/threads`                               | Create a new Post                        |

