import Image from "next/image";
import { Inter } from "next/font/google";
import cn from "@/utility/cn";
import { useReducer, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const buttonItems: string[] = ["7", "8" ,"9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", "C", "=", "+"]

const Screen = (props: {
  value: string;
}) => (
  <div
    id="screen"
    className="w-[344px] text-5xl bg-gray-50 rounded p-2 text-right overflow-x-scroll"
    >
    {props.value}
  </div>
)

const Button = (props: React.ComponentProps<"button">) => {
  return (
    <button
      className="size-20 text-2xl bg-gray-50 rounded hover:bg-gray-200"
      {...props}
      />
  )
}

interface IState {
  value: number;
  result: number;
  mark: string | undefined;
}

const initialState: IState = {
  value: 0,
  result: 0,
  mark: undefined
}

type ActionType = | {
  type: "add",
  value: string;
} | {
  type: "sub",
  value: string;
} | {
  type: "mul",
  value: string;
} | {
  type: "div",
  value: string;
  } | {
  type: "reset",
} | {
  type: "calc",
} | {
  type: "num",
  value: string;
}

const reducer = (state: IState, action: ActionType) => {
  let result = 0;
  let value = 0;
  switch(action.type) {
    case "add":
      return {
        ...state,
        value: 0,
        result: state.value,
        mark: action.value,
      }

    case "sub":
      return {
        ...state,
        value: 0,
        result: state.value,
        mark: action.value,
      }

    case "mul":
      return {
        ...state,
        value: 0,
        result: state.value,
        mark: action.value,
      }

    case "div":
      return {
        ...state,
        value: 0,
        result: state.value,
        mark: action.value,
      }
    
    case "reset":
      return {
        ...state,
        value: 0,
        result: 0,
        mark: undefined
      }
    
    case "calc":
      switch(state.mark) {
        case "+": 
          result = state.result + state.value;
          break;

        case "-": 
          result = state.result - state.value;
          break;
      
        case "*": 
          result = state.result * state.value;
          break;
        
        default:
          result = state.result / state.value;
          break;
      }
      return {
        ...state,
        value: result,
        result: result,
        mark: undefined
      }

    case "num":
      value = parseInt(!state.value ? action.value : state.value + action.value)
    
      return {
        ...state,
        value: value
      };

    default:
      return state;
  }
}

const generateClassName = (value: string) => {
  switch(value) {
    case "+":
      return "plus"

    case "-":
      return "sub"

    case "*":
      return "mul"

    case "/":
      return "div"
    
    case "C":
      return "reset"
    
    case "=":
      return "calc"

    default:
      return value
  }
}

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleCalculate = (value: string) => {
    if(value === "+") {
      dispatch({ type: "add", value: "+" })
      return;
    }
    if(value === "-") {
      dispatch({ type: "sub", value: "-" })
      return;
    }
    if(value === "*") {
      dispatch({ type: "mul", value: "*" })
      return;
    }
    if(value === "/") {
      dispatch({ type: "div", value: "/" })
      return;
    }
    if(value === "C") {
      dispatch({ type: "reset" })
      return;
    }
    if(value === "=") {
      dispatch({ type: "calc" })
      return;
    }
    dispatch({ type: "num", value: value })
    return;
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center py-24 md:p-24 bg-gray-500 gap-4 ${inter.className}`}
    >
      <Screen   
        value={state.mark && !state.value ? state.mark : state.value.toString()}
        />
      <div className="grid grid-cols-4 gap-2">
        {buttonItems.map((buttonItem) => {
          return (
            <Button
              id={`button_${generateClassName(buttonItem)}`}
              className={cn(
                "size-20 text-2xl bg-gray-50 rounded hover:bg-gray-200"
              )}
              onClick={() => handleCalculate(buttonItem)}
              key={buttonItem}
              >
              {buttonItem}
            </Button>
          )
        })}
      </div>
    </main>
  );
}