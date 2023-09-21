import React, { useEffect } from 'react'


export function Updater<T>(Component: React.ComponentType<any>) {
  return function (props: any) {
    
    return <Component {...props} />;
  }
}
