import React from "@rbxts/react";

declare module "@rbxts/react-router" {
    export interface RouterContextType {
        /** Current route path */
        currentPath: string;
        /** Function to navigate to a new route */
        navigate: (path: string) => void;
        /** Route parameters map */
        params: Map<string, string>;
    }

    export interface RouterProviderProps {
        /** Router children components */
        children: React.ReactNode;
        /** Initial route path */
        initialPath?: string;
    }

    export interface RouteProps {
        /** Route path pattern */
        path: string;
        /** Component to render for this route */
        component: React.ComponentType;
    }

    export interface RoutesProps {
        /** Routes children components */
        children: React.ReactNode;
    }

    export interface LinkProps {
        /** Target route path */
        to: string;
        /** Link content */
        children: React.ReactNode;
    }

    export const RouterProvider: React.FC<RouterProviderProps>;
    export const Routes: React.FC<RoutesProps>;
    export const Route: React.FC<RouteProps>;
    export const Link: React.FC<LinkProps>;

    /**
     * Hook to access router context
     * @returns RouterContextType
     * @example
     * const { navigate, currentPath } = useRouter();
     */
    export function useRouter(): RouterContextType;

    /**
     * Hook to access route parameters
     * @returns Map<string, string>
     * @example
     * const params = useParams();
     */
    export function useParams(): Map<string, string>;

    export type NavigateFunction = (path: string) => void;

    export interface RouteMatch {
        /** Matched path parameters */
        params: Map<string, string>;
        /** Whether the route matches current path */
        isMatch: boolean;
    }
}

declare namespace ReactRouter {
    export interface RouteConfig {
        /** Route path */
        path: string;
        /** Component to render */
        component: React.ComponentType;
        /** Child routes */
        children?: RouteConfig[];
    }

    export interface RouterOptions {
        /** Initial route path */
        initialPath?: string;
        /** Whether to enable debug logging */
        debug?: boolean;
    }
}

export = ReactRouter;
