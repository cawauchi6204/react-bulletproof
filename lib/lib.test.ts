import { envCheck,calc } from "./lib";
import { test, expect } from 'vitest';

test("envCheckTest",()=>{
	expect(envCheck("hoge")).toBeTruthy();});

test("calcTest",()=>{
	expect(calc(2)).toBe(4);});