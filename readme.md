A little example integrating jest typescript tests and python pytest tests.

---

### Advantage of jest as a platform:
- Watch and run tests on save.
- Easy install:

```
> npm install --save jest jest-pytest
> npm install --save-dev typescript ts-jest
> pip install pytest pytest-jest
```

- Fast. Run python / typescript tests in parallel.


see https://jest-community.github.io/jest-pytest/


### Python 3 note:

I got it to work with python 3 by commenting out the `pytest_logwarning`
method in the `pytest_jest/plugin.py` file.

https://github.com/jest-community/jest-pytest/issues/30


@todo:
- setup with pipenv
- try to add jest go runner
