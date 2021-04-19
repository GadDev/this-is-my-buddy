import { renderHook } from "@testing-library/react-hooks";

import { useFetch } from "./useFetch";

const stubbedTransactions = [
  {
    date: "2018-06-30",
    description: "Tesco",
    category_title: "Groceries",
    amount: {
      value: -57.21,
      currency_iso: "GBP",
    },
  },
  {
    date: "2018-06-22",
    description: "Max Mustermann",
    category_title: "Income",
    amount: {
      value: 510.55,
      currency_iso: "GBP",
    },
  },
];

const stubbedFetchUrl = "api/transactions-mocked";

afterEach(() => {
  global.fetch.mockClear();
});

afterAll(() => {
  global.fetch.mockRestore();
});

describe("useFetch", () => {
  // writing tests here
  it("should return datsa after fetch", async () => {
    // Mock API
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(stubbedTransactions),
      })
    );

    // Execute
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(stubbedFetchUrl, {}, { current: true }, [])
    );
    await waitForNextUpdate();

    // Assert
    expect(result.current).toStrictEqual({
      loading: false,
      data: stubbedTransactions,
      error: null,
    });
  });

  it("should catch error", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.reject("oops, error occured!"),
      })
    );

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(stubbedFetchUrl, {}, { current: true }, [])
    );

    await waitForNextUpdate();

    expect(result.current).toStrictEqual({
      loading: false,
      data: [],
      error: "oops, error occured!",
    });
  });

  it("should not fetch data if current reference is falsy", async () => {
    const { result } = renderHook(() =>
      useFetch(stubbedFetchUrl, {}, { current: false }, [])
    );

    expect(global.fetch).not.toHaveBeenCalled();
    expect(result.current).toStrictEqual({
      loading: true,
      data: [],
      error: null,
    });
  });
});
