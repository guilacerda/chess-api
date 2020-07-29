# Chess API

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)


This document provides guidelines and examples for Chess API.

# HTTP Verbs

|HTTP METHOD| VERB | PARAMETER | DESCRIPTION |
|----|----|----|----|
|/ | GET | - | home api |
|/movements/:piece | POST | position | return all next possible moves for that piece |

# Responses Examples

## - POST /movements/:piece

```JS
// curl -d "position='H5'" -H "Content-Type: application/x-www-form-urlencoded" -X POST http://localhost:3000/movement/knight

{
    "movements": ["F6","F4","G7","G3"]
}
```

#### HTTP codes

* 200: OK (Return all next possible moves)
* 404: Not Found (This piece does not exist)

# How to contribute

We will very happy to receive your contributions. 

In general, the proccess is very easy:

- Open (or sign the issue) an issue describing a feature that you want to work.
- Code your solution (With tests =D).
- Open a pull request describing all proposed changes.
- The PR will be reviewed and, probably, accepted. (Maybe you will have to make some changes).

* To learn more about the code to contributing, read this [document](https://github.com/guilacerda/chess-api/blob/master/docs/CONTRIBUTING.md).

# License

The entire project is developed unde the MIT license.
