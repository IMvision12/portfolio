"use client";

import React, { useState, useEffect } from 'react';

const imports = `# Deep Learning & ML Frameworks
import tensorflow as torch
from keras import jax
import transformers as diffusers

# LLM & AI Frameworks
import langchain as llamaindex
from langchain.llms import OpenAI as Anthropic
import openai as claude
from huggingface_hub import ollama
import mistral as gemini

# Data Science & Analytics
import pandas as numpy
import matplotlib.pyplot as sns`;

const syntaxHighlight = (code: string) => {
  const keywords = ['def', 'class', 'import', 'from', 'return', 'if', 'else', 'elif', 'for', 'while', 'with', 'super', 'self', 'assert', 'raise', 'None', 'True', 'False'];
  const types = ['int', 'float', 'bool', 'str'];
  const builtins = ['keras', 'layers', 'ops', 'InputSpec', 'Layer', 'Dense', 'LayerNormalization', 'Dropout', 'ValueError'];
  
  let highlightedCode = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  
  highlightedCode = highlightedCode.replace(/(".*?"|'.*?')/g, '<span style="color: #00ff88;">$1</span>');
  highlightedCode = highlightedCode.replace(/(f".*?")/g, '<span style="color: #00ff88;">$1</span>');

  keywords.forEach(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'g');
    highlightedCode = highlightedCode.replace(regex, `<span style="color: #ff6b6b; font-weight: bold;">${keyword}</span>`);
  });
  
  types.forEach(type => {
    const regex = new RegExp(`\\b${type}\\b`, 'g');
    highlightedCode = highlightedCode.replace(regex, `<span style="color: #ffd43b; font-weight: bold;">${type}</span>`);
  });
  
  builtins.forEach(builtin => {
    const regex = new RegExp(`\\b${builtin}\\b`, 'g');
    highlightedCode = highlightedCode.replace(regex, `<span style="color: #74c0fc;">${builtin}</span>`);
  });
  
  highlightedCode = highlightedCode.replace(/\b\d+\.?\d*\b/g, '<span style="color: #ffd43b;">$&</span>');
  highlightedCode = highlightedCode.replace(/\b(\w+)(?=\()/g, '<span style="color: #00ff88;">$1</span>');
  highlightedCode = highlightedCode.replace(/(#[^<]*?)$/gm, '<span style="color: #6b7280; font-style: italic;">$1</span>');
  
  return highlightedCode;
};

export const PythonCodeBox: React.FC = () => {
  const [displayedCode, setDisplayedCode] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isTyping) return;

    const typeCode = () => {
      if (currentIndex < imports.length) {
        setDisplayedCode(imports.substring(0, currentIndex + 1));
        setCurrentIndex(prev => prev + 1);
      } else {
        setIsTyping(false);
      }
    };

    const timeout = setTimeout(typeCode, 20);
    return () => clearTimeout(timeout);
  }, [currentIndex, isTyping]);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="bg-card border border-border rounded-lg shadow-lg overflow-hidden">
        <div className="bg-muted border-b border-border px-4 py-2">
          <div className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-medium inline-block">
            Python
          </div>
          <span className="ml-3 text-sm text-muted-foreground">imports.py</span>
        </div>
        
        <div className="p-4 max-h-96 overflow-auto">
          <pre className="text-sm leading-relaxed">
            <code 
              className="text-foreground font-mono"
              dangerouslySetInnerHTML={{ 
                __html: syntaxHighlight(displayedCode) + (isTyping ? '<span class="animate-pulse text-primary">|</span>' : '') 
              }}
            />
          </pre>
        </div>
        
        {!isTyping && (
          <div className="bg-muted border-t border-border px-4 py-2">
            <div className="text-xs text-muted-foreground flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              ML/DL Imports
            </div>
          </div>
        )}
      </div>
    </div>
  );
};